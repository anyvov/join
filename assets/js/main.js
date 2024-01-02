"use strict";
  
  // 텝
  const tabs = document.querySelectorAll('.tabs input[type="radio"]');
  if(tabs){
    const tabContents = document.querySelectorAll('.tabs .tab-content');

    tabs.forEach((tab, index) => {
      tab.addEventListener('change', () => {
        tabContents.forEach(content => {
          content.classList.remove('active');
        });
        tabContents[index].classList.add('active');
      });
    });
  }

  // 날짜선택
  const acoBtn = document.querySelectorAll('.acoBtn');
  const acoBox = document.querySelectorAll('.acoBox');
  const acoarrow = document.querySelectorAll('.acoBtn .i-arrowRight');

  for(let i = 0; i < acoBtn.length; i++){
    acoBtn[i].addEventListener('click', function(e){
      e.target;
      acoBox[i].classList.toggle('active');
      acoarrow[i].classList.toggle('active');
    })
  }

  // 상세검색 버튼
  const dsBtn = document.querySelector('.detailed-searchBtn');
  const ds = document.querySelector('.detailed-search');

  dsBtn.addEventListener('click', function(){
    ds.classList.toggle('active')
  })