<template>
  <div class="userinfo">
    <!-- <a href="#"> -->
    <!-- <slot >  -->
      <img src="~assets/img/profile/avatar.svg" alt="" class="user-avatar ">
    <!-- </slot> -->
    <div class="login-info ">
      <!-- <slot > -->
        <div class="login" >登录/注册</div>
        <div class="mobile">
          <img src="~assets/img/profile/phone.svg" alt="">
          暂无绑定手机号
        </div>
      <!-- </slot> -->
    </div>
    <div class="arrow">
      <img src="~assets/img/common/arrow-left.svg" alt="">
    </div>
  <!-- </a> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
.userinfo {
  background-color: var(--color-tint);
  padding: 15px ;

  display: flex;
}

.user-avatar {
 width: 60px;
 height: 60px;
 vertical-align: middle;
}

.login-info {
  flex: 1;
  color: #fff;
  margin-left: 15px;
}

.login{
margin-top: 10px;
}

.mobile {
  /* margin-top: 5px; */
  font-size: 13px;
}
.login-info img{
  width: 20px;
  height: 30px;
  vertical-align: middle;
  margin-left: -3px;
}

.arrow {
  position: relative;
  width: 40px;
}
.arrow img{
  position: absolute;
  width: 20px;
  height: 20px;
  top: 20px;
  right: 0;
}
</style>