## USER:

\_id:String;
firstName:String;
lastName:String;
friends:Array<object>
email:String;
password:String;
picturePath:String Ref;
location:String;
occupation:String;
viewedProfile:Number;
impressions:number;

##

## POST:

\_id:String;
userId:String Ref;
firstName:String;
lastName:String;
location:String;
description:String;
userPicturePath:String Ref;
picturePath:String Ref;
likes:Array<object>
comments:Array<String>

##

Friends:
\_id:String;
firstName:String;
lastName:String;
picturePath:String Ref;
location:String;
occupation:String;

##
