Router.configure({
    layoutTemplate:'layout'
});
Router.map(function(){
    this.route('open',{
        path:'/',
        template:'open',
        data: function(){
            return {user: "hello"};
        },
    });
    this.route('about',{
        path:'/about',
        template:'about'
    });
    this.route('profile',{
        path:'/profile',
        template:'profile'
    });
    this.route('login',{
        path:'/login',
        template:'login'
    });
    this.route('register',{
        path:'/register',
        template:'register'
    });
})