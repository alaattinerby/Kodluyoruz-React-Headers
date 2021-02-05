import HeaderComp from "./Header"
import UserCardComp from "./UserCard"
import InputComp from "./InputCard"

export const Header = ({navLinks}) => <HeaderComp navLinks = {navLinks}/>
export const UserCard = () => <UserCardComp />
export const InputCard = () => <InputComp />