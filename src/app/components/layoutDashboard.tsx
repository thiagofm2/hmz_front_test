'use client'

export default function LayoutDashboard({children} : any) {
    return (
        <>
            <div className="flex flex-grow h-full">
                <div className="flex justify-center items-center w-1/5"
                style={{ backgroundColor: '#fff', borderRight:'8px solid #ececec'}}
                >
                    <span>
                        Usuários
                    </span>
                </div>
                <div className="flex justify-center items-center w-4/5 flex-col"
                style={{ position: 'relative'}}
                >
                    <div className="topBar"/>
                    <div className="w-full h-full" >
                        { children }
                    </div>
                </div>
            </div>
        </>
    )
}