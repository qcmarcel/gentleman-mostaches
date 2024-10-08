import { urlPattern } from "@/utils/patterns";
import { EXAMPLE_URL } from "@/config/constants";

export const dynamic = process.env.DYNAMIC === 'true' ? 'force-dynamic' : 'auto';

const service = process.env.SERVICE && urlPattern.test(process.env.SERVICE) ? process.env.SERVICE : EXAMPLE_URL;

export async function GET(request: Request){
    const response = await fetch(service).catch(error => {
        console.error(error);
        return new Response(JSON.stringify(error), { status: 500 });
    });
    const data = await response.json() ?? {};
    return Response.json({data});
}