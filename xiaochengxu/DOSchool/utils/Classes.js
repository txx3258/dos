
//会员类Member及其构造函数,用于实例化dos会员对象。

var dosid = 1;
class Member {

    //构造函数：一键注册
    constructor(name) {
        this.basicInfo = {
            "name": name,
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
    }
    
    //会员注册
    setFromRegister(name, phone, weixinID) {
        if (typeof name === "string" && typeof phone === "number" && typeof weixinID === "string") {
            this.basicInfo.name = name;
            this.socialInfo.phone = phone;
            this.socialInfo.weixinID = weixinID;
        } else {

            //将改成popup组件
            console.log("你输入的类型有误，请重新按格式输入");
        }
    }

    //会员信息填写或修改,先写个大概，到时再改
    setFromEdit(basicInfo, socialInfo, traitInfo, dosInfo) {
        this.basicInfo = basicInfo;
        this.socialInfo = socialInfo;
        this.traitInfo = traitInfo;
        this.dosInfo = dosInfo;
    }
}

/* 主题活动类Subject和活动类Activity，用于实例化创建新的活动，其中，主题活动是指连续的分几期的活动，活动指单次活动或主题活动中的一期*/

class Subject {
    constructor(name) {
        this.name = name;
        this.type = "";
        this.members = [];
        this.decription = "";
        this.isClosed = false;
    }

    //往subject中添加会员
    addMember(member) {
        if (member instanceof Member) {
            this.members.push(member);
        }
    }
}

//将添加活动成果等信息
class Activity extends Subject{
    constructor(name) {
        super(name);
        this.term = 3;
        this.time = new Date();
        this.place = {
            "placeName": "",
            "address": "",
            "location": {
                "latitude": 42.53,
                "longitude": 23.35,
            },
        };
        this.attendee = [];
        this.isCompleted = false;
    }

    //会员签到考勤，必须同时为dos会员和活动会员
    signIn(member) {
        let m = this.members;
        if (member instanceof Member && m.includes(member)) {
            this.attendee.push(member);
        } else {

            //调试使用，将改为popup组件
            console.log("非法类型");
        }
    }
}

var memberSample = new Member("朝阳");

var subjectSample = new Subject("美食");

var activitySample = new Activity("吴二哥巫山纸上烤鱼");

//dos会员数组库，包含dos所有会员，用于调试，将用独立文件表示
var members = [];

members.push(memberSample);

export {Member, members, Subject, Activity, memberSample, activitySample};
