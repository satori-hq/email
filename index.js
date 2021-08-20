"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.template = exports.sendEmail = void 0;

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

_mail["default"].setApiKey(SENDGRID_API_KEY);

var sendEmail = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var to, subject, html, text, _ref$from, from, _yield$sgMail$send, _yield$sgMail$send2, res;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            to = _ref.to, subject = _ref.subject, html = _ref.html, text = _ref.text, _ref$from = _ref.from, from = _ref$from === void 0 ? 'contact@oursatori.com' : _ref$from;

            if (!to || !subject || !html) {
              console.warn('EMAIL - not sent. Must include to, subject and html');
            }

            if (!text) text = html.replace(/<[^>]*>/g, '').replace(/\n/g, '\r\n');
            _context.prev = 3;
            _context.next = 6;
            return _mail["default"].send({
              to: to,
              subject: subject,
              html: html,
              text: text,
              from: from
            });

          case 6:
            _yield$sgMail$send = _context.sent;
            _yield$sgMail$send2 = _slicedToArray(_yield$sgMail$send, 1);
            res = _yield$sgMail$send2[0];
            console.log('EMAIL -', to); // console.log(res)

            return _context.abrupt("return", {
              success: true,
              id: res.headers['x-message-id']
            });

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](3);
            console.error(_context.t0);

          case 16:
            return _context.abrupt("return", {
              success: false
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 13]]);
  }));

  return function sendEmail(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.sendEmail = sendEmail;

var template = function template(_ref3) {
  var para1 = _ref3.para1,
      para2 = _ref3.para2,
      label = _ref3.label,
      link = _ref3.link,
      src = _ref3.src,
      sub1 = _ref3.sub1,
      sub2 = _ref3.sub2;
  return "\n<!doctype html>\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"width=device-width\">\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <title>Simple Transactional Email</title>\n    <style>\n    /* -------------------------------------\n        INLINED WITH htmlemail.io/inline\n    ------------------------------------- */\n    /* -------------------------------------\n        RESPONSIVE AND MOBILE FRIENDLY STYLES\n    ------------------------------------- */\n    @media only screen and (max-width: 620px) {\n      table[class=body] h1 {\n        font-size: 28px !important;\n        margin-bottom: 10px !important;\n      }\n      table[class=body] p,\n            table[class=body] ul,\n            table[class=body] ol,\n            table[class=body] td,\n            table[class=body] span,\n            table[class=body] a {\n        font-size: 16px !important;\n      }\n      table[class=body] .wrapper,\n            table[class=body] .article {\n        padding: 10px !important;\n      }\n      table[class=body] .content {\n        padding: 0 !important;\n      }\n      table[class=body] .container {\n        padding: 0 !important;\n        width: 100% !important;\n      }\n      table[class=body] .main {\n        border-left-width: 0 !important;\n        border-radius: 0 !important;\n        border-right-width: 0 !important;\n      }\n      table[class=body] .btn table {\n        width: 100% !important;\n      }\n      table[class=body] .btn a {\n        width: 100% !important;\n      }\n      table[class=body] .img-responsive {\n        height: auto !important;\n        max-width: 100% !important;\n        width: auto !important;\n      }\n    }\n\n    /* -------------------------------------\n        PRESERVE THESE STYLES IN THE HEAD\n    ------------------------------------- */\n    @media all {\n      .ExternalClass {\n        width: 100%;\n      }\n      .ExternalClass,\n            .ExternalClass p,\n            .ExternalClass span,\n            .ExternalClass font,\n            .ExternalClass td,\n            .ExternalClass div {\n        line-height: 100%;\n      }\n      .apple-link a {\n        color: inherit !important;\n        font-family: inherit !important;\n        font-size: inherit !important;\n        font-weight: inherit !important;\n        line-height: inherit !important;\n        text-decoration: none !important;\n      }\n      #MessageViewBody a {\n        color: inherit;\n        text-decoration: none;\n        font-size: inherit;\n        font-family: inherit;\n        font-weight: inherit;\n        line-height: inherit;\n      }\n      .btn-primary table td:hover {\n        background-color: #34495e !important;\n      }\n      .btn-primary a:hover {\n        background-color: #34495e !important;\n        border-color: #34495e !important;\n      }\n    }\n    </style>\n  </head>\n  <body class=\"\" style=\"background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;\">\n    <span class=\"preheader\" style=\"color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;\">This is preheader text. Some clients will show this text as a preview.</span>\n    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"body\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;\">\n      <tr>\n        <td style=\"font-family: sans-serif; font-size: 14px; vertical-align: top;\">&nbsp;</td>\n        <td class=\"container\" style=\"font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;\">\n          <div class=\"content\" style=\"box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;\">\n\n            <!-- START CENTERED WHITE CONTAINER -->\n            <table class=\"main\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;\">\n\n              <!-- START MAIN CONTENT AREA -->\n              <tr>\n                <td class=\"wrapper\" style=\"font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;\">\n                  <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;\">\n                    <tr>\n                      <td style=\"font-family: sans-serif; font-size: 14px; vertical-align: top;\">\n                        ".concat(para1 ? "<p style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;\">".concat(para1, "</p>") : '', "\n                        ").concat(para2 ? "<p style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;\">".concat(para2, "</p>") : '', "\n\n\t\t\t\t\t\t").concat(src ? "<center>\n\t\t\t\t\t\t\t\t<img src=\"".concat(src, "\" style=\"width: 100%;\" />\n\t\t\t\t\t\t\t</center>") : '', "\n\n                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"btn btn-primary\" style=\"margin-top: 16px; border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;\">\n                          <tbody>\n                            <tr>\n                              <td align=\"left\" style=\"font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;\">\n                                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;\">\n                                  <tbody>\n                                    <tr>\n                                      <td style=\"font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;\"> <a href=\"").concat(link, "\" target=\"_blank\" style=\"display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;\">").concat(label, "</a> </td>\n                                    </tr>\n                                  </tbody>\n                                </table>\n                              </td>\n                            </tr>\n                          </tbody>\n                        </table>\n                        ").concat(sub1 ? "<p style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;\">".concat(sub1, "</p>") : '', "\n                        ").concat(sub2 ? "<p style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;\">".concat(sub2, "</p>") : '', "\n                      </td>\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n\n            <!-- END MAIN CONTENT AREA -->\n            </table>\n\n            \n\n          <!-- END CENTERED WHITE CONTAINER -->\n          </div>\n        </td>\n        <td style=\"font-family: sans-serif; font-size: 14px; vertical-align: top;\">&nbsp;</td>\n      </tr>\n    </table>\n  </body>\n</html>\n");
}; // <!-- START FOOTER -->
// <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
// 	<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
// 	<tr>
// 		<td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
// 		<span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">Company Inc, 3 Abbey Road, San Francisco CA 94102</span>
// 		<br> Don't like these emails? <a href="http://i.imgur.com/CScmqnj.gif" style="text-decoration: underline; color: #999999; font-size: 12px; text-align: center;">Unsubscribe</a>.
// 		</td>
// 	</tr>
// 	<tr>
// 		<td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
// 		Powered by <a href="http://htmlemail.io" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">HTMLemail</a>.
// 		</td>
// 	</tr>
// 	</table>
// </div>
// <!-- END FOOTER -->


exports.template = template;
