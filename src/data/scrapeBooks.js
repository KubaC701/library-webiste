import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://lubimyczytac.pl/katalog');

  await page.setViewport({ width: 1080, height: 1024 });

  const titles = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.authorAllBooks__singleTextTitle'), (element) =>
      element.textContent.trim()
    )
  );

  const urls = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll('.authorAllBooks__singleTextTitle'),
      (element) => element.href
    )
  );

  const authors = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll('.authorAllBooks__singleTextAuthor--bottomMore'),
      (element) => element.textContent.trim()
    )
  );

  const thumbnails = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll('.authorAllBooks__singleImgWrap > img'),
      (element) => element.src
    )
  );

  const descriptions = [];
  for (let index = 0; index < urls.length; index++) {
    const url = urls[index];
    await page.goto(url, {
      waitUntil: 'domcontentloaded',
    });
    const element = await page.evaluate(() =>
      document.querySelector('.collapse-content').children[0].innerHTML.replaceAll('<br>', '\n')
    );
    descriptions.push(element);
  }

  const books = titles.map((title, index) => ({
    title,
    url: urls[index],
    author: authors[index],
    description: descriptions[index],
    thumbnail: thumbnails[index],
  }));

  fs.writeFile('books.json', JSON.stringify(books), 'utf8', () => {});

  await browser.close();
})();
