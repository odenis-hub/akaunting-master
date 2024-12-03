@php
    $source = (strpos($source, 'public/') === 0) ? substr($source, 7) : $source;
@endphp

@push('scripts_start')
    <script src="{{ asset($source) }}"></script>
@endpush
