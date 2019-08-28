let nav = document.querySelector('.nav-menu');
let navMb = document.querySelector('.mb-menu');

navMenu = 				`<li>
<a href="###" class="nav-link menu-list login" data-toggle="modal" data-target=".sign">會員登入/註冊</a>
</li>
<li data-toggle="collapse" data-target=".menudown1">
<a href="###" class="nav-link menu-list">公司簡介</a>
<span class="fas fa-caret-down menu-list-down"></span>

<div class="menu-brand-down menudown collapse menudown1">
    <a href="#" class="menudown-list nav-link">111</a>
    <a href="#" class="menudown-list nav-link">111</a>
    <a href="#" class="menudown-list nav-link">111</a>
</div>
</li>
<li class="menu-brand" data-toggle="collapse" data-target=".menudown2">
<a href="###" class="nav-link menu-list">產品</a>
<span class="fas fa-caret-down menu-list-down"></span>

<div class="menu-brand-down menudown collapse menudown2">
    <a href="#" class="menudown-list nav-link">111</a>
    <a href="#" class="menudown-list nav-link">111</a>
    <a href="#" class="menudown-list nav-link">111</a>
</div>
</li>
<li class="menu-dm" data-toggle="collapse" data-target=".menudown3">
<a href="###" class="nav-link menu-list">線上促銷</a>
<span class="fas fa-caret-down menu-list-down"></span>

<div class="menu-dm-down menudown collapse menudown3">
    <a href="#" class="menudown-list nav-link">全國</a>
    <a href="#" class="menudown-list nav-link">專櫃</a>
    <a href="#" class="menudown-list nav-link">111</a>
</div>


</li>
<li class="menu-member" data-toggle="collapse" data-target=".menudown4">
<a href="###" class="nav-link menu-list">會員專區</a>
<span class="fas fa-caret-down menu-list-down"></span>

<div class="menu-member-down menudown collapse menudown4">
    <a href="#" class="menudown-list nav-link">會員卡申請說明</a>
    <a href="#" class="menudown-list nav-link">會員資料修改</a>
    <a href="#" class="menudown-list nav-link">獨享優惠</a>
</div>


</li>
<li class="menu-about" data-toggle="collapse" data-target=".menudown5">
<a href="###" class="nav-link menu-list">技術支援</a>
<span class="fas fa-caret-down menu-list-down"></span>

<div class="menu-about-down menudown collapse menudown5">
    <a href="#" class="menudown-list nav-link">品牌介紹</a>
    <a href="#" class="menudown-list nav-link">公益活動</a>
    <a href="#" class="menudown-list nav-link">人才招募</a>
    <a href="#" class="menudown-list nav-link">招募人專區</a>
</div>


</li>`;

   nav.innerHTML = navMenu; 
   navMb.innerHTML = navMenu; 


