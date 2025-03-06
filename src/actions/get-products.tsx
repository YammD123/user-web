import { Category, Product } from "../../types";
import qs from "query-string"
const URL = `${process.env.PUBLIC_API_URL}/categories`;

interface Query{
    categoryId?: string;
    isFeatured?: boolean
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.categoryId,
            isFeatured: query.isFeatured
        }
    })
    const res = await fetch(URL);
    return res.json();
}

export default getProducts