<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscribe extends Model
{
    use HasFactory;

    protected $fillable = [
        'day',
        'amount',
        'screen',
    ];

    public function packages()
    {
        return $this->hasMany(Package::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
