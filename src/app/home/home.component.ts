import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {NgbModal,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

export class Soulers {
  Name:string;
  Img:string;
  Nickname:string;
  Age:string;
  Height:string;
  Weight:string;
  Hobby:string;
  Occupation:string;
  Single:string;
  Reason:string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  SHOW1="";

  firstDate: any; 
  secondDate: any;
  diffInDays: number;

  constructor(private modalService: NgbModal) { 
  }

  ngOnInit() {
    this.SHOW1 = "true";
    this.firstDate = moment('2019/05/21');
    this.secondDate = new Date();  
    this.diffInDays = Math.abs(this.firstDate.diff(this.secondDate, 'days'));
    
    if(this.month1==10 && this.day1==25){
      window.alert("Hello1");
    }
    //Happy New Year 2020
    else if(this.month1==0 && this.day1==1){
      this.HNY2020=true;
      //window.alert("Hello2");
    }
    //WU HAN JIA YOU 2020
    else if(this.diffInDays != 0){
      this.WUHANJIAYOU2020=true;
      //window.alert("Hello2");
    }
    else if(this.diffInDays% 365 == 0){
      this.Birthday1 = true;
      //window.alert("Hello187");
      setTimeout(() => this.Birthday1 = false, 5000);
    } 
  }

  //HNY2020
  HNY2020=false;
  closeHNY2020() {
    this.HNY2020 = false;
    //setTimeout(() => this.show = false, 5000);
    } 
  //WUHANJIAYOU2020
  WUHANJIAYOU2020=false;
  closeWUHANJIAYOU2020() {
    this.WUHANJIAYOU2020 = false;
    //setTimeout(() => this.show = false, 5000);
    } 
  //Birthday Section
  //Toast Soul-MY Birthday
  BirthdayName1="马来西亚Soul友";
  Birthday1 = false;
  close1() {
  this.Birthday1 = false;
  //setTimeout(() => this.show = false, 5000);
  } 


  //Date and Time
  month0= new Date();
  month1= this.month0.getMonth();
  day1 = this.month0.getDate();

  public isCollapsedVideo = true;
  public isCollapsedVideo1 = true;

  Soulers=[
    {Name:'Closed',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    /*
    //{Name:'RaYLoH kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'Capriio18 kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'Junwei PP',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'小翼 kl彩妆师',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'乔安娜Joanna Selangor',Img:'qan.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'JianLin  JB',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'凌シIvyChibie沙巴',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'kc  KL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'zenon_selangor',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'雯林selangor',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'书虫天掉下来柔佛',Img:'wd1.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'骏 Sabah',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'Liyee️  Sarawak',Img:'liyee.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'无聊算命学徒😶新山',Img:'ddg.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'欣然接受  浦种',Img:'xr.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'夜空（已经不是你的了）🤫pd',Img:'kongkong1.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'猫爷🦁槟城',Img:'my.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'yf_____baci KL',Img:'yf2.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'kat kat 夜猫子🦉～KL',Img:'kat1.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'}, 
    //{Name:'haha 雪州',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'天使の微笑Sarawak',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'hui__PG',Img:'hui.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'🥀¢уитнια🖤 KL',Img:'cyn.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'静静看热闹rawang',Img:'jjj.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'星期日 kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'Carl KL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Leon🛵JB😎专业潜水员😎',Img:'leon1.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Jolyn 美汕  雪兰莪',Img:'jol.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'Lilian 💞  Cheras',Img:'lla.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'MICKY-JB',Img:'micky.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Iris_Blake_PG',Img:'iris.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'andy🤖🤖k l',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'Hugo (KL)',Img:'hg.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Mark - kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'jin shenKL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'颖(✯⸜(ّᶿ̷ധّᶿ̷)⸝✯ 彭亨',Img:'xyy.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'ཎི·Ck ·ནྀ klang',Img:'ck.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Nick - 槟城',Img:'nick.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'蛋挞 马六甲',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'JY Tan, jb',Img:'jy.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'随便撩 砂劳越',Img:'wf.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},   
    //{Name:'kelvin 雪兰莪jeram',Img:'kv.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Christine Klang人住KL',Img:'chris.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'💞小姐姐💞',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Kelvin ^cheras3seremban^',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'4.3大海狼️JB',Img:'cj.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'等嘟嘟回来499天芙蓉-subang',Img:'ddd.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'Dax¤kl',Img:'dax.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'Anthony Lee cheras',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Jimmy KL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'teantze PJ-Taiping',Img:'xtt.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'Ning宁龄 JB',Img:'ning.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Jackal Sam KL',Img:'jac.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'V-柔佛 新山',Img:'V.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'旺仔@TeH croix#马6甲',Img:'wz1.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'Rex Chong-JB',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'CALL me ah jt_ KL',Img:'jt.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'Yvonne Lim JB',Img:'yl.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'css@kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'--kl(柔佛）',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'忠忠信信️Kajang',Img:'忠忠信信.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'邦哥 cheras',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Eric Ko😶 Johor pontian',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'。小丑 霹雳',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'小绵羊 Selangor',Img:'小绵羊.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'德 Sarawak',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'HiunG-KL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Kelvin_Sabah',Img:'kelvin_sabah.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'19 Wilson jb',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Mia🙊KL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'ailee 砂劳越 ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'금 雪洲PJ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'白兔糖（sarawak）',Img:'bernice.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Irene (珊) 登州～',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'喵＋ jb',Img:'alex.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'崽崽JB',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Yana雪妍 kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Junnie君 KL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'神秘的活潑小可愛 KL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'小白（雪兰莪）',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'佳偉Selangor',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'chianwen stw',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Ivan-哥打',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'WilsonLai🏻️ JB',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Amy liew kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'凌枫  雪兰莪',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Aaronhtf KL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    */
  ]

  admins=
  [
    {Img:'qz3.png',Id:1,Title:'Admin',Name:'群主很忙Klang'},
    {Img:'wilson2.jpg',Id:2,Title:'Admin',Name:'Wil求包养 管理员_JB miss u'},
    {Img:'cony.jpg',Id:3,Title:'Admin',Name:'管coni管理员想你了Sarawak'},
    {Img:'huf2.jpg',Id:4,Title:'Admin',Name:'小潜水2020·管理员·沙捞越'},
    {Img:'kat1.png',Id:5,Title:'Admin',Name:'kat  kat 管理员 ～KL'},
    {Img:'xyy.png',Id:6,Title:'Admin',Name:'颖(✯⸜管理员  彭亨'},
    {Img:'lla.jpg',Id:7,Title:'Admin',Name:'莉莉安💞  管理员 Cheras'},
  ]

  SoulersN=[
    //6
    {Name:'Betty C. PG',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Jarvis @KL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'kendy-雪兰莪 ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'cabe k.k ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'jb单纯老弟弟🙈🙉🙊 ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'杰乐KL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'匙羹🥄 kl ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //9
    {Name:'单纯的黄明順JB',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'马六甲渣男代表😎 ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'vicky韪颀🐾KL🐾 ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'MandyJB',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'顺（kl)',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'dismo Lee@马六甲狼',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Jia Hui-Johor ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'单纯的麻坡人',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'PY@高渊',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //12
    {Name:'SG静静看你说-Johor',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'华 Sarawak',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Niki Ong - KL Bukit Jalil',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'圆圆 🌍高渊 ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:' cindy-佩驊 ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'vicky只负责看戏.... kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'頭髮好亂 TW',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'婉婷*槟城',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'单纯小阿姨Swk️Sg',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'⭐️今晚看星星⭐️KL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'祥荣Sarawak ',Img:'详荣.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'阿伟-新山',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Ben Banting',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //16
    {Name:'信',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Sanco@selangor',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Titan 😎 SEL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Angus ipoh 霹雳',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'略懂孤儿，大山脚',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'FIRE 雪兰莪',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'谢董 Klang',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'john woo@Petaling jaya',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'迷 niG 广东 ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'摆渡人@吉隆坡',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Andrew｛Penang ｝',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'�sarawak ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'calvin oh jw 新山上海 程序员',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'三月China',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'幃小寶 霹靂',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'传说。槟城 ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //14
    //{Name:'璇 kuching',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Kenz',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'夜@吉隆坡',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'阿蒙 jb',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Vincent Teo💯_JB ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Venus Hui@swak ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Lo Lock johor',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:' 紫莹  penang lang',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Ah Yee吉隆坡',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'栗子cherish(^ω^) JB',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'珍珍️森美兰',Img:'珍珍.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'莉莉安 💞  Cheras',Img:'lla.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Hugo (KL)',Img:'hg.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'yf_____baci KL',Img:'yf2.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'猫爷🦁槟城',Img:'my.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Liyee️  Sarawak',Img:'liyee.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'空空🤫pd',Img:'kongkong1.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //17
    {Name:'Chun Sabah',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'不想谈恋爱  ks',Img:'kv.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'🥀路過🖤kl',Img:'cyn.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'teantze PJ-Taiping',Img:'xtt.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'随便撩 砂劳越',Img:'wf.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},   
    {Name:'小幼苗🌱 jb',Img:'wd1.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Yvonne Lim JB',Img:'yl.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'算命学徒😎斗s-jb',Img:'ddg.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Carl KL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Dax¤kl',Img:'dax.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'忠忠信信️Kajang',Img:'忠忠信信.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'贝塔[怡保]',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'MICKY-JB',Img:'micky.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'TeNg Selangor',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'🦁 Negeri Sembilan',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'kaisoon as',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'浪里小白龙 China',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'China广西的穷孩子',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'JC o(´^｀)o KL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //33
    {Name:'🎈sg',Img:'ballon.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'kokchin ～ kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Wai Hong Ho Jb',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'文強pd',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'宝宝JB',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'T  jb',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Iris_Blake PP',Img:'iris.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'JY Tan，JB',Img:'jy.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'星期日 🌝kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'HiunG kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'小弟kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'慧 PP',Img:'hui.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'崽崽🙊JB ',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'汕 雪兰莪',Img:'jol.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:' 珊TRG',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Ivan jb',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'神秘的活潑小可愛 KL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Jackal Sam KL',Img:'jac.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Collin China',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Andy kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'乔安娜Joanna Selangor',Img:'qan.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'小男孩kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Call me aj kl',Img:'jt.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Mr.Jimmy kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Yana雪妍',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'静静看热闹Rawang,MLK',Img:'jjj.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'錒楊  馬六甲',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Xtongz 馬六甲',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Kendra Johor',Img:'kendra.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'有点意思sg',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'jason@pj',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Bernice （sarawak）',Img:'bernice.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Elane～吧生',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'华 kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //end 33
  ]

  Admin=7;
  //OldSoul=60;
  NewSoul=114;

  modalReference: NgbModalRef;
  selectedSouler: Soulers;
  onSelect(soulers: Soulers,view1): void {
    this.selectedSouler = soulers;
    this.modalReference = this.modalService.open(view1, {ariaLabelledBy: 'modal-basic-title'})
  }
  close(){
    this.modalReference.close();
  }

  
  isCollapsed="";
  password="";
  passwordInfo="";


  //Unlock video
  Unlocked='';
  Unlock($password){
    if($password=="soul0521"){
      this.Unlocked='unlock';
      window.alert("Unlock Success");
    }
    else{
      window.alert("Wrong password");
    }
  }

  //Unlock Info
  UnlockedO=true;
  UnlockedA='';
  UnlockInfo($passwordInfo){
    if($passwordInfo=="soul20190521"){
      this.UnlockedA='unlock';
      this.UnlockedO=false;
      window.alert("Unlock Success");
    }
    else{
      window.alert("Wrong password");
    }
  }

  Unlocked1=true;

}
