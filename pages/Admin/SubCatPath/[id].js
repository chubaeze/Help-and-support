import { useRouter } from "next/router";

const SubPath = () => {
    const router = useRouter()
    const id = router.query.id
    return ( <div>Hi {id}</div> );
}
 
export default SubPath;