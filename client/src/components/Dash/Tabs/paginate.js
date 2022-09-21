
 export function paginate(pageNumber, e, setCurrentPage) {
    let i;
    let links = document.getElementsByClassName(`page_link${e.target.name}`);

    // *********** removing class than added class only on selected pagination btn *********
    for (i = 0; i < links.length; i++) {
      links[i].classList.remove("active_pagination", "text-dark");
    }
    document
      .getElementById(e.target.id)
      .classList.add("active_pagination", "text-dark");
    setCurrentPage(pageNumber);
  
  }





export function arrowFunc(e, middleIndex, currentPage, setCurrentPage) {
     // ******* arrow buttons ********************
    let i;
    let links = document.getElementsByClassName(`page_linkimgSale`);
    let cssBtnOver = document.getElementsByClassName(`8li-pagination`);
    let cssBtnUnder = document.getElementsByClassName(`0li-pagination`);

    //  *** splitting the numbers in half and toggle through the two********

    // ****** the numbers that are over the midline ********
    for (i = 0; i < cssBtnOver.length; i++) {
      if ((e.target.id === "add") & (currentPage + 1 > middleIndex)) {
        cssBtnOver[i].classList.remove(`d-none`);
        // cssBtnOver[i].classList.add(`btn`, `btn-primary`);
      }
      if ((e.target.id === "subtract") & (currentPage - 2 < middleIndex)) {
        cssBtnOver[i].classList.add(`d-none`);
      }
    }
    // ****** the numbers that are under the midline ********
    for (i = 0; i < cssBtnUnder.length; i++) {
      if ((e.target.id === "subtract") & (currentPage - 2 < middleIndex)) {
        cssBtnUnder[i].classList.remove(`d-none`);
        // cssBtnUnder[i].classList.add(`btn`, `btn-primary`);
      }
      if ((e.target.id === "add") & (currentPage + 1 > middleIndex)) {
        cssBtnUnder[i].classList.add(`d-none`);
      }
    }

    // ****** highlighting number btn when using arrows **************
    for (i = 0; i < links.length; i++) {
      links[i].classList.remove("active_pagination", "text-dark");
    }
    if (e.target.id === "add") {
      document
        .getElementById(currentPage + 1 + "imgSale")
        .classList.add("active_pagination", "text-dark");
    } else {
      document
        .getElementById(currentPage - 1 + "imgSale")
        .classList.add("active_pagination", "text-dark");
    }
    // **** changing the page with the add arrow or subtract arrow ***
    if (e.target.id === "add") {
      return setCurrentPage(currentPage + 1);
    } else {
      return setCurrentPage(currentPage - 1);
    }
  }