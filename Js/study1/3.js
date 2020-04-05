const device = "android";
// if 문을 웬만하면 안 쓰는 편이다.

switch(device){
    case "ios":
        console.log("아이폰");
        break;
    case "android":
        console.log("갤럭시");
        break;
    case "nokia":
        console.log("노키아");
        break;
    default:
        console.log("몰랑");
}

