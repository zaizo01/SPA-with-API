import initialComponent from './components/initialComponent'
// import usersComponent from './components/usersComponent'
import userInfoComponent from './components/userInfoComponent'

// Lazy Loading in Webpack, this only use the component when is used
const UsersComponent = resolve => {
    require.ensure(['./components/usersComponent'], () => {
        resolve(require('./components/usersComponent'));
    })
}

export const path = [
    {path: '', component: initialComponent},
    {path: '/user', component: UsersComponent, name: 'user'}, 
    {path: '/usuarios', redirect: '/user'}, 
    {path: ':id', component: userInfoComponent, name: 'InfoUser'},
    {path: '*', redirect: '/'}, 
]