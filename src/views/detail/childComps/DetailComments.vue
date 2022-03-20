<template>
  <div class="comments" v-if="Object.keys(comments).length !==0">
    <div class="comments-header">
      <div class="title">用户评价</div>
      <div class="more">
        <span>更多</span>
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="comments-user">
      <img :src="comments.user.avatar" alt="">
      <span>{{comments.user.uname}}</span>
    </div>
    <div class="comments-detail">
      <p>{{comments.content}}</p>
      <div class="detail-other">
        <span class="date">{{ShowDate}}</span>
        <span>{{comments.style}}</span>
      </div>

    </div>
  </div>
</template>

<script>
import{formatDate} from 'common/utils.js'
  export default {
    props:{
      comments:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed: {
      ShowDate(){

        let date = new Date(this.comments.created*1000);
        return formatDate(date,"yyyy-MM-dd");
        // 写成“YYYY-MM-dd”转换失败，根据formatDate函数来的，函数里匹配的是y
      }
    }
    
  }
</script>

<style>
.comments{
  height: 220px;
  padding: 5px 15px 20px 15px;
  border-bottom: 5px solid rgba(100, 100, 100, .1);
}
.comments-header{
display: flex;
justify-content: space-between;
 height: 50px;
 line-height: 50px;
 font-size: 15px;
 border-bottom:1px solid rgba(100, 100, 100, .1) ;
}

.more {
  font-size: 13px;
  margin-right: 10px;
}

.arrow-right {
  margin-left: 5px;
}

.comments-user{
  padding:10px 0px;
  font-size: 15px;
}
.comments-user img {
  width: 40px;
  height: 40px;
  /* vertical-align: middle; */
  border-radius: 50%;
  margin-right: 5px;
}

.comments-user span{
  position: relative;
  top: -13px;
}

.comments-detail{
  font-size: 14px;
  line-height: 20px;
}
.detail-other {
  margin-top: 8px;
  font-size: 12px;
  color: #999;
}
.detail-other .date {
  margin-right: 8px;
}
</style>