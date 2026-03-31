/* ── auth-nav.js ─────────────────────────────────────────────
   Orthodox Companion — Shared Auth Nav
   Add to every page (except account.html) just before </body>:
     <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
     <script src="auth-nav.js"></script>
   Requires these IDs in the nav HTML (present in new nav structure):
     #navSignIn, #navUserMenu, #navUserBtn, #navUsername,
     #navUserDropdown, #drawerSignIn
──────────────────────────────────────────────────────────── */
(function(){
  var SUPA_URL='https://hhatdkrcqnhixemjavgb.supabase.co';
  var SUPA_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoYXRka3JjcW5oaXhlbWphdmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5MTA0NDksImV4cCI6MjA5MDQ4NjQ0OX0.9KSdbZ2RiPbAepj0XvwvUfrdu9yOMq5VcHKgunNEwQ4';
  var _sb=null;

  function initSb(){
    if(_sb) return _sb;
    if(window.supabase&&window.supabase.createClient){
      _sb=window.supabase.createClient(SUPA_URL,SUPA_KEY,{auth:{persistSession:true,storage:localStorage}});
    }
    return _sb;
  }

  function updateNav(user){
    var navSignIn=document.getElementById('navSignIn');
    var navUserMenu=document.getElementById('navUserMenu');
    var navUsername=document.getElementById('navUsername');
    var drawerSignIn=document.getElementById('drawerSignIn');
    if(user){
      var name=user.email.split('@')[0];
      if(navSignIn) navSignIn.style.display='none';
      if(navUserMenu) navUserMenu.style.display='block';
      if(navUsername) navUsername.textContent=name;
      if(drawerSignIn){ drawerSignIn.textContent=name; drawerSignIn.href='account.html'; }
    } else {
      if(navSignIn) navSignIn.style.display='';
      if(navUserMenu) navUserMenu.style.display='none';
      if(drawerSignIn){ drawerSignIn.textContent='Sign In'; drawerSignIn.href='account.html'; }
    }
  }

  /* Global functions expected by nav HTML on all pages */
  window.toggleUserMenu=function(){
    var d=document.getElementById('navUserDropdown');
    var b=document.getElementById('navUserBtn');
    if(d) d.classList.toggle('open');
    if(b) b.classList.toggle('open');
  };

  window.signOut=function(){
    var sb=initSb();
    if(!sb) return;
    sb.auth.signOut().then(function(){
      updateNav(null);
      window.location.href='account.html';
    });
  };

  /* Close user dropdown on outside click */
  document.addEventListener('click',function(e){
    if(!e.target.closest('.nav-account-wrap')){
      var d=document.getElementById('navUserDropdown');
      var b=document.getElementById('navUserBtn');
      if(d) d.classList.remove('open');
      if(b) b.classList.remove('open');
    }
  });

  /* On load: check session and update nav */
  document.addEventListener('DOMContentLoaded',function(){
    var sb=initSb();
    if(!sb) return;
    sb.auth.getSession().then(function(result){
      var session=result&&result.data&&result.data.session;
      updateNav(session?session.user:null);
    });
  });
})();
