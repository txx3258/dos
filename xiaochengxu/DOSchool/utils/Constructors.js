
var dosid = 1;
var members = [];

var User = function () {
    this.basicInfo = {
        "name": "",
        "gender": "male",
        "age": 25,
        "portrait": "url",
    };
    this.socialInfo = {
        "isAvailable": true,
        "phone": 1234567890,
        "email": "123456789@163.com",
        "weixinID": "1234567890",
        "qqID": "123456789",
    };
    this.traitInfo = {
        "job": "",
        "hobbies": "",
        "skills": [],
        "education": {
            "level": "",
            "school": "",
            "major": "",
            "graduateYear": "",
        },
        "desciption": "",
    };
    this.dosInfo = {
        "dosName": this.socialInfo.weixinID,
        "dosID": dosid++,
        "schedule": {},
        "dosAsset": 0,
        "experience": {},
    };
};

var Member1 = function (name) {
    if (typeof name === "string") {
        User.call(this);
        this.basicInfo.name = name;
        members.push(this);
    } else {

        //将换成popUp类组件
        console.log("你输入的类型有误，请重新输入你的名字");
    }
};

var Member2 = function (name, phone, weixinID) {
    if (typeof name === "string" && typeof phone === "number" && typeof weixinID === "string") {
        User.call(this);
        this.basicInfo.name = name;
        this.socialInfo.phone = phone;
        this.socialInfo.weixinID = weixinID;
        members.push(this);
    } else {

        //将换成popUp类组件
        console.log("你输入的类型有误，请重新按格式输入");
    }
};

var memberSample = new Member1("朝阳");

export {Member1, Member2, members};
