import { createVendiaClient } from '@vendia/client';

const client = createVendiaClient({
  apiUrl: `https://arimkqyeak.execute-api.us-west-2.am`,
  websocketUrl: `wss://1ckn28vxue.execute-api.us-west-2.amazonaws.com/`,
  apiKey:'6BNK5vfb4N3VEqqR1c2vQZsAUaToypXZMer2owLqEZ3u',
});  
const { entities } = client;



async function async_list() {
    console.log('Calling async_list function');
    const employeeResponse = await entities.employee.list();
    console.log(employeeResponse);
}
async_list();

// export const data = [
//     { id: 1, name: 'john'},
//     { id: 2, name: 'jane'},
//     { id: 3, name: 'jimmy'},
// ];