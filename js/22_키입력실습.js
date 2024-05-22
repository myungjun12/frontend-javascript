const 키들 = document.querySelectorAll(".key");
        // 키 다운 background = lightblue
        // 키 다운 color = lightpink
        function 키다운기능(e){
            let 숫자값저장;
            
            switch(e.key){
                case 'a' : 숫자값저장 = 0;
                    break; 
                case 's' : 숫자값저장 = 1;
                    break; 
                case 'd' : 숫자값저장 = 2;
                    break; 
                case 'f' : 숫자값저장 = 3;
                    break; 
                default :
                    return;
            }
            키들[숫자값저장].style.background = "lightblue"
            키들[숫자값저장].style.color = "lightpink"
        };
        // 키 업 background = lightpink
        // 키 업 color = lightblue
      function 키업기능(e){
            let 숫자값저장;
            
            switch(e.key){
                case 'a' : 숫자값저장 = 0;
                    break; 
                case 's' : 숫자값저장 = 1;
                    break; 
                case 'd' : 숫자값저장 = 2;
                    break; 
                case 'f' : 숫자값저장 = 3;
                    break; 
                default :
                    return;
            }
            키들[숫자값저장].style.background = "lightblue"
            키들[숫자값저장].style.color = "lightpink"
        };
            document.addEventListener("keyup",키다운기능);
            document.addEventListener("keydown",키업기능);