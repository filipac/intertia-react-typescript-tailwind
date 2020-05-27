<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SampleController extends Controller
{
    public function index()
    {
        return Inertia::render('Sample/Index', [
            'links' => [
                ['name' => 'Docs', 'link' => "https://laravel.com/docs"],
                ['name' => 'Laracasts', 'link' => "https://laracasts.com"],
                ['name' => 'News', 'link' => "https://laravel-news.com"],
                ['name' => 'Blog', 'link' => "https://blog.laravel.com"],
                ['name' => 'Nova', 'link' => "https://nova.laravel.com"],
                ['name' => 'Forge', 'link' => "https://forge.laravel.com"],
                ['name' => 'Vapor', 'link' => "https://vapor.laravel.com"],
                ['name' => 'GitHub', 'link' => "https://github.com/laravel/laravel"],
            ]
        ]);
    }
}
