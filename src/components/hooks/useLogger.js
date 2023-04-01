import  {useState, useEffect} from 'react'

export default function useLogger(init) {
    const [value, setValue] = useState(init);
    useEffect(() => {
      console.log(value);
    }, [value]);
    return [value, setValue]
}
