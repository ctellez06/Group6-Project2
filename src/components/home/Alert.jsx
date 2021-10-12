import React, { useEffect } from 'react';

function Alert(_ref) {
  var type = _ref.type,
      msg = _ref.msg,
      removeAlert = _ref.removeAlert,
      list = _ref.list;

  useEffect(function () {
    var timeout = setTimeout(function () {
      removeAlert();
    }, 3000);
    return function () {
      return clearTimeout(timeout);
    };
  }, [list]);
  return React.createElement(
    'p',
    { className: 'alert alert-' + type },
    msg
  );
};

export default Alert;