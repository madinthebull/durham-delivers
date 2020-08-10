window.onload = function() {

  function checkAll1() {

    const inputs = document.querySelectorAll('.checkbox');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].checked = true;
    }

    this.onclick = uncheckAll1;
  }

  function uncheckAll1() {
    const inputs = document.querySelectorAll('.checkbox');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }

    this.onclick = checkAll1;
  }

  let el = document.getElementById('menu');
  el.onclick = uncheckAll1;

  let scrollpos = window.scrollY;
  const header = document.getElementById('hamburger');

  function add_class_on_scroll() {
      header.classList.add('scrolled');
  }

  function remove_class_on_scroll() {
      header.classList.remove('scrolled');
  }

  window.addEventListener('scroll', function() {
      scrollpos = window.scrollY;

      if ( scrollpos > 10 ) {
          add_class_on_scroll();
      }
      else {
          remove_class_on_scroll();
      }
  });

}
