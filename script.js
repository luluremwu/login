const wrapper = document.querySelector('.wrapper')
const loginlink = document.querySelector('.loginlink')
const registerlink = document.querySelector('.registerlink')

registerlink.addEventListener('click' ,()=>{
    wrapper.classList.add('active')
});

loginlinklink.addEventListener('click' ,()=>{
    wrapper.classList.remove('active')
});
