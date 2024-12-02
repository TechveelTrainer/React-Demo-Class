

const Nav=()=>{
    const arr=['Home','About','contact','Home','About','contact']
    return <nav>
        <ul>
            {
                arr.map((value,i)=><li key={value+i}>{value}</li>)
            }
        </ul>
    </nav>
}

export default Nav