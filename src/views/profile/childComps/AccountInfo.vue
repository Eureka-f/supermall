<template>
  <div class="accountinfo">
    <div class="account-item">
      <div class="number">
          <span class="balance">0.00</span>元
      </div>
      <div class="account-info">我的余额</div>
    </div>
    <div class="account-item">
      <div class="number">
          <span class="balance">0.00</span>元
      </div>
      <div class="account-info">我的余额</div>
    </div>
    <div class="account-item">
      <div class="number">
          <span class="balance">0.00</span>元
      </div>
      <div class="account-info">我的余额</div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
.accountinfo {
 display: flex;
}

.account-item {
  flex: 1;
  text-align: center;
  padding: 15px 10px;
  color: #666;
  font-size: 14px;
}

.account-item .balance {
  font-size: 24px;
  color: #ff5f3e;
  font-weight: 700;
}
.account-info {
  margin-top: 10px;
}
</style>