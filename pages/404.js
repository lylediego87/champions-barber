import Link from 'next/link'

const NotFound = () => {
  return (  
    <div className='not-found'>
      <h1>Ooooops...</h1>
      <h2>That page cannot be found. </h2>
      <p><Link href="/"><a>Back to Homepage</a></Link></p>
    </div>
  );
}
 
export default NotFound;