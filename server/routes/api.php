<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BudgetEntryController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/totals', [BudgetEntryController::class, 'totals']);

Route::get('/entries', [BudgetEntryController::class, 'index']);
Route::post('/entries', [BudgetEntryController::class, 'store']);

Route::get('/entries/{id}', [BudgetEntryController::class, 'show']);
Route::put('/entries/{id}', [BudgetEntryController::class, 'update']);

