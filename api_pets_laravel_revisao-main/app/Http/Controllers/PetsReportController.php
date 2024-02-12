<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class PetsReportController extends Controller
{
    public function export(Request $request) {
        $pets = Pet::query();

        $filters = $request->query();

        if ($request->has('name') && !empty($filters['name'])) {
            $pets->where('name', 'ilike', '%' . $filters['name'] . '%');
        }

        if ($request->has('age') && !empty($filters['age'])) {
            $pets->where('age', $filters['age']);
        }

        if ($request->has('size') && !empty($filters['size'])) {
            $pets->where('size', $filters['size']);
        }

        if ($request->has('weight') && !empty($filters['weight'])) {
            $pets->where('weight', $filters['weight']);
        }

        $result = $pets->get();

        $pdf = Pdf::loadView('pdfs.petsTable', [
            'pets' => $result
        ]);

        return $pdf->stream('relatorio.pdf');
    }

    public function showPerfil(Request $request){
        $id = $request->input('id');

        $pet = Pet::
        with('race')
        ->with('specie')
        ->with('vaccines')
        ->find($id);

        $name = $pet->name;
        $race = $pet->race->name;
        $specie = $pet->specie->name;
        $vaccines = $pet->vaccines;


        return $pet;
        $pdf = Pdf::loadView('pdfs.perfilPet', [
            'name' => $name,
            'race' => $race,
            'specie' => $specie,
            'vaccines' => $vaccines
        ]);

        return $pdf->stream('perfil.pdf');
    }
}
