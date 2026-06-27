let email_block = document.querySelector(".email-block");
email_block.addEventListener("click", function () {
  window.location.href = "mailto:mail@example.org";
});

let tel_block = document.querySelector(".tel-block");
tel_block.addEventListener("click", function () {
  window.location.href = "tel:+0123456789";
});

let map_one = document.querySelector(".map_one");
map_one.addEventListener("click", function () {
  window.open(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.5843775336334!2d-71.0920028!3d42.3300628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a260516d22d%3A0x67663c18c6a54ce9!2zMSBDZW50cmUgU3QsIEJvc3RvbiwgTUEgMDIxMTksINCh0KjQkA!5e0!3m2!1sru!2sby!4v1678564803233!5m2!1sru!2sby",
    (target = "_blank")
  );
});

let map_two = document.querySelector(".map_two");
map_two.addEventListener("click", function () {
  window.open(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.85497512758!2d0.0058135999999999995!3d51.44245720000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a9e35f520529%3A0x8d1b5611767e32ec!2zMTggUyBQYXJrIENyZXMsIExvbmRvbiBTRTYgMUpXLCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sby!4v1678565131639!5m2!1sru!2sby",
    (target = "_blank")
  );
});
