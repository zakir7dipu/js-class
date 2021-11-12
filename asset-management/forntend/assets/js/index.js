const navigateTo = url =>{
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        {path: '/', view: ()=> console.log('page 1')},
        {path: '/page2', view: ()=> console.log('page 2')},
        {path: '/page3', view: ()=> console.log('page 3')},
    ]

    const potentialMatchs = routes.map(route =>{
        return{
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = potentialMatchs.find(potentialMatch => potentialMatch.isMatch);
    if (!match){
        match = {
            route: routes[0],
            isMatch: true
        }
    }
    console.log(match.route.view())
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')){
            e.preventDefault();
            navigateTo(e.target.href)
        }
    })
    router();
})