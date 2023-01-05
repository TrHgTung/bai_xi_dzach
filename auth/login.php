<?php

session_start();

include("./connection.php");
include("./functions.php");


if($_SERVER['REQUEST_METHOD'] == "POST"){
    $username = $_POST['username'];
    $password = $_POST['password'];

    if(!empty($username) && !empty($password) && !is_numeric($username)){
        //
        $query = "select * from users where username = '$username' limit 1";

        $result = mysqli_query($con, $query);

        if($result){
            if($result && mysqli_num_rows($result) > 0){
                $user_data = mysqli_fetch_assoc($result);
                
                if($user_data['password'] === $password){
                    $_SESSION['user_id'] = $user_data['user_id'];

                    header("Location: ./user.php");
                    die;
                }
            }
        }
        echo '<script type="text/javascript">
                window.onload = function(){
                    alert("Bạn nhập sai thông tin đăng nhập. Vui lòng nhập lại!");
                }
            </script>';
            
    }else{
        echo '<script type="text/javascript">
                window.onload = function(){
                    alert("Bạn nhập sai thông tin đăng nhập. Vui lòng nhập lại!");
                }
            </script>';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>
<body>
    <?php include '.././footerAndHeader/header.php'; ?>
<form action="" method="">
    <div class="text-center ">
        <h3 class="mt-5">Đăng nhập</h3>
        <div class="mt-5 ">
            <input type="text" name="" id="" placeholder="Nhập tên đăng nhập" name="username" class="">
        </div>
        <div class="mt-5">
            <input type="password" name="" id="" placeholder="Nhập mật khẩu" name="password" class="">
        </div>
        <div class="mt-5">
            <input type="button" value="Đăng nhập" class="btn btn-secondary">
        </div>
    </div>
</form>
    <?php include '.././footerAndHeader/footer.php'; ?>
</body>
</html>