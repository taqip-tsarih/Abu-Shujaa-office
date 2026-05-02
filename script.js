// تأثير بسيط عند التمرير لظهور العناصر
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// رسالة ترحيبية في الكونسول (للمطورين)
console.log("موقع مكتب أبو شجاع جاهز للعمل!");
