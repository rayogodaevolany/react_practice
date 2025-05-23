import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <div id="error-page">
                <h1> error</h1>
                <i> {error.statusText || error.message} </i>
            </div>
        </>
    )
}

