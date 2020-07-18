<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request;  
use App\Http\Controllers\Controller; 
use App\User; 
use Illuminate\Support\Facades\Auth; 
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Firebase\JWT\JWT; 
class UserController extends Controller 
{
public $successStatus = 200;
/** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function login(Request $request){

            if(Auth::attempt(['email' => request('email'), 'password' => request('password') ])){ 
                $user = Auth::user(); 
                $success['token'] =  $user->createToken('MyApp')->accessToken; 
                $success['auth'] = Auth::user();
                $success['status'] = 1;
                return response()->json(['success' => $success], $this->successStatus); 
            } 
            else{ 
                return response()->json(['error'=>'Unauthorised'], 401); 
            }    
    }
/** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */

    public function register(Request $request) 
    { 
        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => 'required|email', 
            'password' => 'required', 
            'c_password' => 'required|same:password', 
        ]);
    if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input); 
        $success['token'] =  $user->createToken('MyApp')->accessToken; 
        $success['name'] =  $user->name;
        $success['status'] =  1;
return response()->json(['success'=>$success], $this->successStatus); 
    }

/** 
     * details api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function details() 
    { 
        $user = Auth::user(); 
        $secret_key = 'pankaj';
        $payload_info = [
                        "iss"  => 'localhost',
                        "iat"  => time(),
                        "nbf"  => time() + 10,
                        "exp"  => time() + 86400,
                        "aud"  => 'myUser',
                        "data" => $user
                    ];
        $user['token'] = $this->jwt = JWT::encode($payload_info, $secret_key, "HS256");
        $user['status'] = 1;

        return response()->json(['success' => $user], $this->successStatus); 
    }

 /*   function index(Request $request)
    {
        $user= User::where('email', $request->email)->first();
        // print_r($data);
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response([
                    'message' => ['These credentials do not match our records.']
                ], 404);
            }
        
             $token = $user->createToken('my-app-token')->plainTextToken;
        
            $response = [
                'user' => $user,
                'token' => $token
            ];
        
             return response($response, 201);
    }*/
}