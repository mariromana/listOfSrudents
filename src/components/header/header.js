import './header.css'

const Header = ({total}) => {
    return (
        <div className="header">
            <h1 className='header-title'>Some university</h1>
            <div className='header-descr'>Total number of students: {total}</div>

        </div>

    )
}

export default Header;