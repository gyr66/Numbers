<template>
  <div id="root">
    <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a
      href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
    <![endif]-->

    <!-- signin end -->
    <section class="signin">
      <div class="container">

        <div class="sign-content">
          <h2>登录</h2>

          <div class="row">
            <div class="col-sm-12">
              <div class="signin-form">
                <form action="signin.html">
                  <div class="form-group">
                    <label for="signin_form">邮箱</label>
                    <input type="email" class="form-control" id="signin_form" placeholder="请输入正确的邮箱">
                  </div><!--/.form-group -->
                  <div class="form-group">
                    <label for="signin_form">密码</label>
                    <input type="password" class="form-control" id="signin_form" placeholder="请输入密码">
                  </div><!--/.form-group -->
                </form><!--/form -->
              </div><!--/.signin-form -->
            </div><!--/.col -->
          </div><!--/.row -->

          <div class="row">
            <div class="col-sm-12">
              <div class="signin-password">
                <div class="awesome-checkbox-list">
                  <ul class="unstyled centered">

                    <li>
                      <input class="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value2">
                      <label for="styled-checkbox-2">记住密码</label>
                    </li>

                    <li>
                      <a href="#">忘记邮箱或密码?</a>
                    </li>

                  </ul>
                </div><!--/.awesome-checkbox-list -->
              </div><!--/.signin-password -->
            </div><!--/.col -->
          </div><!--/.row -->

          <div class="row">
            <div class="col-sm-12">
              <div class="signin-footer">
                <button type="button" class="btn signin_btn" data-toggle="modal" data-target=".signin_modal">
                  登录
                </button>
                <p>
                  还不会本站会员 ?
                  <a href="signup.html">注册</a>
                </p>
              </div><!--/.signin-footer -->
            </div><!--/.col-->
          </div><!--/.row -->

        </div><!--/.sign-content -->

        <!-- modal part start -->
        <div class="modal fade signin_modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="sign-content">

                <div class="modal-header">
                  <h2>登录</h2>
                </div><!--/.modal-header -->

                <div class="modal-body">
                  <div class="signin-form">
                    <div class=" ">
                      <div class=" ">
                        <form action="signin.html">
                          <div class="form-group">
                            <label for="signin_form">邮箱</label>
                            <input type="email" class="form-control" id="signin_form" placeholder="请输入正确的邮箱">
                          </div><!--/.form-group -->
                          <div class="form-group">
                            <label for="signin_form">密码</label>
                            <input type="password" class="form-control" id="signin_form" placeholder="请输入密码">
                          </div><!--/.form-group -->
                        </form><!--/form -->
                      </div><!--/.col -->
                    </div><!--/.row -->

                  </div><!--/.signin-form -->

                  <div class="signin-modal-password">
                    <div class="awesome-checkbox-list">
                      <ul class="unstyled centered">

                        <li>
                          <input class="styled-checkbox" id="styled-checkbox-3" type="checkbox" value="value3">
                          <label for="styled-checkbox-3">记住密码</label>
                        </li>

                        <li>
                          <a href="signin.html">忘记邮箱或密码 ?</a>
                        </li>

                      </ul>
                    </div><!--/.awesome-checkbox-list -->
                  </div><!--/.signin-modal-password -->

                  <div class="signin-footer">
                    <button type="button" class="btn signin_btn" data-toggle="modal" data-target=".signin_modal">
                      登录
                    </button>
                    <p>
                      还不会本站会员 ?
                      <a href="signup.html">注册</a>
                    </p>
                  </div><!--/.signin-footer -->
                </div><!--/.modal-body -->

              </div><!--/.sign-content -->
            </div><!--/.modal-content -->
          </div><!--/.modal-dialog -->
        </div><!--/.modal -->
        <!-- modal part end -->
      </div><!--/.container -->

    </section><!--/.signin -->

    <!-- signin end -->

    <!--footer copyright start -->
    <footer class="footer-copyright">
      <div id="scroll-Top">
        <i class="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top"
           title="" data-original-title="Back to Top" aria-hidden="true"></i>
      </div><!--/.scroll-Top-->

    </footer><!--/.hm-footer-copyright-->
    <!--footer copyright  end -->
  </div>

</template>

<script>
@import "src/assets/js/custom.js"
export default {
  name: "test"
}


</script>

<style scoped>
  #root {

  }
</style>

<!--font-awesome.min.css-->
<style scoped src="../assets/css/font-awesome.min.css"/>

<!--animate.css-->
<style scoped src="../assets/css/animate.css"/>

<!--bootstrap.min.css-->
<style scoped src="../assets/css/bootstrap.min.css"/>

<!-- bootsnav -->
<!--<style scoped src="../assets/css/bootsnav.css"/>-->

<!--style.css-->
<style scoped src="../assets/css/style.css"/>

<!--responsive.css-->
<style scoped src="../assets/css/responsive.css"/>

<!--<style scoped src="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&amp;subset=devanagari,latin-ext" rel="stylesheet"/>-->
