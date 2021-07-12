test('mounts app', () => {
  document.body.innerHTML =
    '<div id="app">' +
    '</div>'

  require('@/main')

  expect(document.getElementById('app')).toBeTruthy();
  expect(document.querySelector('.menu')).toBeTruthy();
});
