export default async function search(name){


    try{

        const result = await fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${name}`);

        const data = result.json()
        
        return data

    }
    catch(err){

        console.log(err)
    }


}