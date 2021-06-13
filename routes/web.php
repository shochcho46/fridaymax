<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\MainmenuController;
use App\Http\Controllers\ProfileSetting;
use App\Http\Controllers\RegController;
use App\Http\Controllers\RegUserController;
use App\Http\Controllers\SubmenuController;
use App\Http\Controllers\SubscribeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
// Auth::routes();

// ROUTE FOR NON REG USER

Route::get('/', [HomeController::class, 'index'])->name('Home');
Route::get('/login', [HomeController::class, 'login'])->name('login');
Route::get('/contents/{mainid}/{subid}', [HomeController::class, 'content'])->name('contents.content');
Route::get('/contents/{mainid}/', [HomeController::class, 'contentmain'])->name('contents.maincontent');
Route::get('/registration', [HomeController::class, 'reg'])->name('registration');

// Route::get('/tests', [HomeController::class, 'test'])->name('tests');

// Route::get('/play', [HomeController::class, 'video'])->name('Play');

Route::get('/play', [HomeController::class, 'movie'])->name('Play');

// ROUTE FOR REG USER

// Login Validation

Route::post('/login/valid', [LoginController::class, 'authenticate'])->name('Logvalid');
Route::get('/logout', [LoginController::class, 'logout'])->name('logout');
Route::post('/reg/user', [RegController::class, 'store'])->name('Reg.store');
Route::get('/user/home', [RegController::class, 'store'])->name('reg.home');

// Reg User
Route::get('/register', [RegUserController::class, 'index'])->name('register.index')->middleware('screencheck');
Route::get('/subscriptions', [RegUserController::class, 'subscription'])->name('subscriptions.subscriplist')->middleware('screencheck');
Route::get('/addsubscriptions/{subscribetion}', [RegUserController::class, 'addsubscription'])->name('addsubscriptions.subscribetion');
Route::get('/paymentlist', [RegUserController::class, 'paymentlist'])->name('paymentlist.index')->middleware('screencheck');
Route::get('/screencheck', [RegUserController::class, 'screeenchekmessage'])->name('screencheck.message');
Route::get('/devicelogout', [RegUserController::class, 'logutdevice'])->name('device.list');
Route::delete('/devices/{device}', [RegUserController::class, 'destroy'])->name('device.logout');

// Profile

Route::patch('/profilesitem/{pic}', [ProfileSetting::class, 'profilepic'])->name('profile.updatepic');
Route::get('/profiles', [ProfileSetting::class, 'profileload'])->name('profile.load');
Route::put('/profilesitem/{item}', [ProfileSetting::class, 'updateitem'])->name('profile.updateitem');

// ROUTE FOR ADMINS

//Load Main menu
Route::get('/admins', [AdminController::class, 'dashboard'])->name('admin.dashboard');

// Subscription
Route::get('/subscrips', [SubscribeController::class, 'index'])->name('subscrips.index');
Route::get('/subscrips/create', [SubscribeController::class, 'create'])->name('subscrips.create');
Route::post('/subscrips', [SubscribeController::class, 'store'])->name('subscrips.store');
Route::get('/subscrips/{subscribe}/edit', [SubscribeController::class, 'edit'])->name('subscrips.edit');
Route::put('/subscrips/{subscribe}', [SubscribeController::class, 'update'])->name('subscrips.update');
Route::delete('/subscrips/{subscribe}', [SubscribeController::class, 'destroy'])->name('subscrips.destroy');

// Main Menu
Route::get('/mainmenus', [MainmenuController::class, 'index'])->name('mainmenus.index');
Route::get('/mainmenus/create', [MainmenuController::class, 'create'])->name('mainmenus.create');
Route::post('/mainmenus', [MainmenuController::class, 'store'])->name('mainmenus.store');
Route::get('/mainmenus/{mainmenu}/edit', [MainmenuController::class, 'edit'])->name('mainmenus.edit');
Route::put('/mainmenus/{mainmenu}', [MainmenuController::class, 'update'])->name('mainmenus.update');
Route::delete('/mainmenus/{mainmenu}', [MainmenuController::class, 'destroy'])->name('mainmenus.destroy');

// Sub Menu
Route::get('/submenus', [SubmenuController::class, 'index'])->name('submenus.index');
Route::get('/submenus/create', [SubmenuController::class, 'create'])->name('submenus.create');
Route::post('/submenus', [SubmenuController::class, 'store'])->name('submenus.store');
Route::get('/submenus/{submenu}/edit', [SubmenuController::class, 'edit'])->name('submenus.edit');
Route::put('/submenus/{submenu}', [SubmenuController::class, 'update'])->name('submenus.update');
Route::delete('/submenus/{submenu}', [SubmenuController::class, 'destroy'])->name('submenus.destroy');

// User Menu

Route::get('/users', [UserController::class, 'index'])->name('users.index');
Route::get('/users/create', [UserController::class, 'create'])->name('users.create')->middleware('admincheck');
Route::post('/users', [UserController::class, 'store'])->name('users.store')->middleware('admincheck');
Route::get('/users/{usertype}', [UserController::class, 'getuser'])->name('users.type');
Route::get('/users/{user}/edit', [UserController::class, 'edit'])->name('users.edit')->middleware('admincheck');
Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update')->middleware('admincheck');
Route::get('/userdetails/{userdetails}', [UserController::class, 'show'])->name('users.detail');
Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy')->middleware('admincheck');
