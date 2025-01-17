<?php

namespace Database\Seeders;

use App\Abstracts\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;

class Modules extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->create();

        Model::reguard();
    }

    private function create()
    {
        //$company_id = $this->command->argument('company');
        $company_id = 1;
        Artisan::call('module:install', [
            'alias'     => 'offline-payments',
            'company'   => $company_id,
            'locale'    => session('locale', 'en_US'),
        ]);

        Artisan::call('module:install', [
            'alias'     => 'paypal-standard',
            'company'   => $company_id,
            'locale'    => session('locale', 'en_US'),
        ]);
    }
}
