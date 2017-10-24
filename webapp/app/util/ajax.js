import Promise from 'bluebird';

export function ajax(options) {
  return new Promise((resolve, reject) => {
    options.type = options.method;
    $.ajax(options)
      .done(res => resolve(res))
      .fail(error => reject(new Error(error.responseText)));
  });
}

export function getJSON(url) {
  return ajax({
    url: url,
    method: 'GET',
    contentType: 'application/json'
  });
}

export function postJSON(url, data) {
  return ajax({
    url: url,
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data)
  });
}