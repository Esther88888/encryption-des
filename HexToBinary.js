function HexToBinary(component){// دالة لتحويل قيمة نصية بالنظام الست عشري إلى النظام الثنائي
    var result=[];   // تعريف مصفوفة لاحتواء الناتج الثنائي
    for (i=0;i<16;i++){
        // تكرار على كل خانة في النص الست عشري المدخل
        switch (component[i]){  // مطابقة كل خانة ست عشرية وتحويلها إلى 4 بتات ثنائية
            case "0":
                result+="0000";
                break;
                case "1":
                result+="0001";
                break;  
                case "2":
                result+="0010";
                break;  
                case "3":
                result+="0011";
                break;
                case "4":
                result+="0100";
                break;
                case "5":
                result+="0101";
                break;
                case "6":
                result+="0110";
                break;
                case "7":
                result+="0111";
                break;
                case "8":
                result+="1000";
                break;
                case "9":
                result+="1001";
                break;
                case "A":
                result+="1010";
                break;
                case "B":
                result+="1011";
                break;
                case "C":
                result+="1100";
                break;
                case "D":
                result+="1101";
                break;
                case "E":
                result+="1110";
                break;
                case "F":
                result+="1111";
                break; } }  return result;}  // إعادة النص الثنائي الكامل كناتج للدالة