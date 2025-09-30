<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BudgetEntry;

class BudgetEntryController extends Controller
{
    public function totals()
    {
        $income = BudgetEntry::where('amount', '>', 0)->sum('amount');
        $outcome = BudgetEntry::where('amount', '<', 0)->sum('amount');

        return response()->json([
            'income' => $income,
            'outcome' => abs($outcome)
        ]);
    }

    public function index()
    {
        return BudgetEntry::orderBy('created_at', 'desc')->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'    => 'required|string',
            'amount'   => 'required|numeric',
            'category' => 'required|string',
        ]);

        $entry = BudgetEntry::create($data);

        return response()->json($entry, 201);
    }

    public function show($id)
    {
        return BudgetEntry::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $entry = BudgetEntry::findOrFail($id);

        $data = $request->validate([
            'title'    => 'required|string',
            'amount'   => 'required|numeric',
            'category' => 'required|string',
        ]);

        $entry->update($data);

        return response()->json($entry);
    }
}
