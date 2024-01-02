"use strict";
  
  /*==================== SHOW SCROLL TOP ====================*/
  // window.scrollTo({top: 0, behavior: 'smooth'});
  // window.scrollTo({top: 0});

  // // Scroll To Top
  // function scrollToTop() {
  //   window.scrollTo({top: 0, behavior: 'smooth'});
  // }

  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll')

    scrollUp.addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
  }

  window.addEventListener('scroll', scrollUp)


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

  
  // 상세검색 버튼
  
  const dsBtn = document.querySelector('.detailed-searchBtn');
  if(dsBtn){
    const ds = document.querySelector('.detailed-search');

    dsBtn.addEventListener('click', function(){
      ds.classList.toggle('active')
    });
  }
 

  // 상세검색02
  const acoBtn02 = document.querySelectorAll('.acoBtn02');
  if(acoBtn02){
    const acoBox02 = document.querySelectorAll('.acoBox02');
    const blackbg = document.querySelector('.backbg');
    const calcloseBtn = document.querySelectorAll('.calcloseBtn');
  
    // 날짜선택 클릭시
    for(let v = 0; v < acoBtn02.length; v++ ){
      try{
        acoBtn02[v].addEventListener('click', function(e){
          e.target;
          acoBox02[v].classList.toggle('active');
          blackbg.classList.add('active');
        });
    
        calcloseBtn[v].addEventListener('click', function(e){
          e.target;
          acoBox02[v].classList.remove('active');
          blackbg.classList.remove('active');
        });
      }catch{
        
      }      
    }

      // 배경클릭시 지우기
      blackbg.addEventListener('click', function(e){
        for(let k = 0; k < acoBtn02.length; k++ ){
        e.target;
        acoBox02[k].classList.remove('active')
        blackbg.classList.remove('active');
        }
      })

  }


  // 클로즈버튼 누르면 지우기
  // for(let j = 0; j < acoBtn02.length; j++ ){
  //   calcloseBtn[j].addEventListener('click', function(e){
  //     e.target;
  //     acoBox02[j].classList.remove('active');
  //     blackbg.classList.remove('active');
  //   })
  // }


  // 파일 미리보기
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('preview').src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      document.getElementById('preview').src = "";
    }
  }






