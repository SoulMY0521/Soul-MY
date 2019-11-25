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
    
/*     if(this.month1==10 && this.day1==25){
      window.alert("Hello1");
    }
    else if(this.month1==10 && this.day1==26){
      window.alert("Hello2");
    }
    else if(this.diffInDays==365){
      window.alert("Hello187");
    } */
  }
  month0= new Date();
  month1= this.month0.getMonth();
  day1 = this.month0.getDate();

  public isCollapsedVideo = true;

  Soulers=[
    {Name:'RaYLoH kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
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
    {Name:'骏 Sabah',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Liyee️  Sarawak',Img:'liyee.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'无聊算命学徒😶新山',Img:'ddg.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'欣然接受  浦种',Img:'xr.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'夜空（已经不是你的了）🤫pd',Img:'kongkong1.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'猫爷🦁槟城',Img:'my.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'yf_____baci KL',Img:'yf2.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'kat kat 夜猫子🦉～KL',Img:'kat1.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'}, 
    {Name:'haha 雪州',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'天使の微笑Sarawak',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'hui__PG',Img:'hui.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'🥀¢уитнια🖤 KL',Img:'cyn.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'静静看热闹rawang',Img:'jjj.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'星期日 kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Carl KL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Leon🛵JB😎专业潜水员😎',Img:'leon1.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Jolyn 美汕  雪兰莪',Img:'jol.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Lilian 💞  Cheras',Img:'lla.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'MICKY-JB',Img:'micky.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Iris_Blake_PG',Img:'iris.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'andy🤖🤖k l',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Hugo (KL)',Img:'hg.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Mark - kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'jin shenKL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'颖(✯⸜(ّᶿ̷ധّᶿ̷)⸝✯ 彭亨',Img:'xyy.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'ཎི·Ck ·ནྀ klang',Img:'ck.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Nick - 槟城',Img:'nick.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'蛋挞 马六甲',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'JY Tan, jb',Img:'jy.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'随便撩 砂劳越',Img:'wf.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},   
    {Name:'kelvin 雪兰莪jeram',Img:'kv.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Christine Klang人住KL',Img:'chris.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'💞小姐姐💞',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Kelvin ^cheras3seremban^',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'4.3大海狼️JB',Img:'cj.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'等嘟嘟回来499天芙蓉-subang',Img:'ddd.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Dax¤kl',Img:'dax.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Anthony Lee cheras',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Jimmy KL',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'teantze PJ-Taiping',Img:'xtt.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Ning宁龄 JB',Img:'ning.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Jackal Sam KL',Img:'jac.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'V-柔佛 新山',Img:'V.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'旺仔@TeH croix#马6甲',Img:'wz1.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'Rex Chong-JB',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'CALL me ah jt_ KL',Img:'jt.png',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Yvonne Lim JB',Img:'yl.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    //{Name:'css@kl',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'--kl(柔佛）',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'忠忠信信️Kajang',Img:'忠忠信信.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'邦哥 cheras',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'Eric Ko😶 Johor pontian',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'。小丑 霹雳',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
    {Name:'小绵羊 Selangor',Img:'小绵羊.jpg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
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
    {Name:'Agony（JB）',Img:'user.svg',Nickname:'string',Age:'string',Height:'string',Weight:'string',Hobby:'string',Occupation:'string',Single:'string',Reason:'string'},
  ]

  Total=73;
  Admin=6;

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

}
