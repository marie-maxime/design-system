import { newE2EPage } from '@stencil/core/testing';

it('Test ZButtonFilter should emit removefilter event', async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let removefilterCounter = 0;
  await page.exposeFunction('onRemoveFilter', e => {
    removefilterCounter = 1;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = 'removefilter';
  page.evaluateOnNewDocument(type => {
    document.addEventListener(type, e => {
      window.onRemoveFilter({type, detail: e.detail});
    });
  }, type);

  await page.setContent(`<z-button-filter filtername=""></z-button-filter>`);
  const removeFilterBtn = await page.find('z-button-filter >>> .close-icon-container');

  expect(removefilterCounter).toEqual(0);

  removeFilterBtn.click();
  await page.waitForChanges();

  expect(removefilterCounter).toEqual(1);
});

it('Test ZButtonFilter fixed button should not emit removefilter event', async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let removefilterCounter = 0;
  await page.exposeFunction('onRemoveFilter', e => {
    removefilterCounter = 1;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = 'removefilter';
  page.evaluateOnNewDocument(type => {
    document.addEventListener(type, e => {
      window.onRemoveFilter({type, detail: e.detail});
    });
  }, type);

  await page.setContent(`<z-button-filter filtername="" isfixed></z-button-filter>`);
  const removeFilterBtn = await page.find('z-button-filter >>> .close-icon-container');

  expect(removefilterCounter).toEqual(0);

  removeFilterBtn.click();
  await page.waitForChanges();

  expect(removefilterCounter).toEqual(0);
});
