<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\RegisterRequest;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;

class AuthController extends Controller {
    public function register( RegisterRequest $request ) {
        $user = User::create( [
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => bcrypt( $request->password ),
        ] );

        //$success['token'] = $user->createToken( 'MyApp' )->plainTextToken;
        //$success['name'] = $user->name;
        $token = $user->createToken( 'MyApp' )->plainTextToken;

        $response = [
            'success' => true,
            'data'    => $user,
            'token'   => $token,
            'message' => 'User register successfully',
        ];

        return response()->json( $response, 200 );

    }

    public function login( Request $request ) {

        if ( Auth::attempt( ['email' => $request->email, 'password' => $request->password] ) ) {
            $user = Auth::user();

            $token = $user->createToken( 'MyApp' )->plainTextToken;
            //$success['name'] = $user->name;

            $response = [
                'success' => true,
                'token'   => $token,
                'data'    => $user,
                'message' => 'User login successfully',
            ];

            return response()->json( $response, 200 );
        } else {
            $response = [
                'success' => false,
                'message' => 'Unauthorized',
            ];

            return response()->json( $response );
        }

    }

}
